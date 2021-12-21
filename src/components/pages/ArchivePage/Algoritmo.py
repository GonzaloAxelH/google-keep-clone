# Algoritmo de colonia de hormigas par resolver le problema del viajante
import numpy as np
import random as rd


def calcularLongitud(hormigaPath, distanciaMat):  # Calcular distancia
    length = []
    dis = 0
    for i in range(len(hormigaPath)):
        for j in range(len(hormigaPath[i]) - 1):
            dis += distanciaMat[hormigaPath[i][j]][hormigaPath[i][j + 1]]
        dis += distanciaMat[hormigaPath[i][-1]][hormigaPath[i][0]]
        length.append(dis)
        dis = 0
    return length


distanciaMat = np.array([[1, 1, 2, 2, 2],
                         [2, 3, 1, 2, 4],
                         [1, 3, 2, 4, 2],
                         [1, 1, 4, 2, 4],
                         [2, 2, 2, 3, 1],
                         [2, 1, 3, 2, 2],
                         ])

antNum = 3  # Número de hormiga
alpha = 1  # Factor de importancia de las feromonas
beta = 3  # Factor de importancia de la función heurística
pheEvaRate = 0.3  # Tasa de evaporación de feromonas
cityNum = distanciaMat.shape[0]
# Matriz de feromonas
CantFeromonas = np.ones((cityNum, cityNum))
# Matriz de información heurística, tome 1 entre la distancia
heuristic = 1 / (np.eye(cityNum) + distanciaMat) - np.eye(cityNum)
# Número de iteraciones
iterCount, iterCountacionesMax = 1, 100

while iterCount < iterCountacionesMax:
    hormigaPath = np.zeros((antNum, cityNum)).astype(
        int) - 1   # Camino de la hormiga en una matriz de zeros
    ciudadInicio = [i for i in range(5)]
    # Asigna aleatoriamente una ciudad de inicio para cada hormiga
    rd.shuffle(ciudadInicio)
    unvisted = []  # Los que ya fueron visitados
    p = []
    pAccum = 0
    for i in range(len(hormigaPath)):
        hormigaPath[i][0] = ciudadInicio[i]
    # Actualiza  la próxima ciudad a la que irá cada hormiga
    for i in range(len(hormigaPath[0]) - 1):
        for j in range(len(hormigaPath)):
            for k in range(cityNum):
                if k not in hormigaPath[j]:
                    unvisted.append(k)
            for m in unvisted:  # Reciorremos los lugares donde la hormiga no visito para el impacto de las fermonas
                pAccum += CantFeromonas[hormigaPath[j][i]][m] ** alpha * \
                    heuristic[hormigaPath[j][i]][m] ** beta
            for n in unvisted:
                p.append(CantFeromonas[hormigaPath[j][i]][n] ** alpha *
                         heuristic[hormigaPath[j][i]][n] ** beta / pAccum)
            # se utiliza el metodo de la ruleta
            roulette = np.array(p).cumsum()
            r = rd.uniform(min(roulette), max(roulette))
            for x in range(len(roulette)):  # recorremos la ruleta
                if roulette[x] >= r:
                    hormigaPath[j][i + 1] = unvisted[x]
                    break
            unvisted = []
            p = []
            pAccum = 0
    CantFeromonas = (1 - pheEvaRate) * CantFeromonas
    length = calcularLongitud(hormigaPath, distanciaMat)
    for i in range(len(hormigaPath)):  # recorremos el camino de la hornmiga
        for j in range(len(hormigaPath[i]) - 1):
            CantFeromonas[hormigaPath[i][j]][hormigaPath[i][j + 1]
                                             ] += 1 / length[i]  # Actualización de feromonas
        CantFeromonas[hormigaPath[i][-1]][hormigaPath[i][0]] += 1 / length[i]
    iterCount += 1  # Aumentamos la iteraciones


# imprimimos los resultados


print("L distancia mas corta :")
print(min(length))
print("El camino mas corto :")
print(hormigaPath[length.index(min(length))])
