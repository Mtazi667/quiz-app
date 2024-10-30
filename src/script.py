import random

def repartir_joueurs():
    # Demande du nombre de joueurs et d'équipes
    nombre_joueurs = int(input("Combien de joueurs y a-t-il ? "))
    nombre_equipes = int(input("Combien d'équipes voulez-vous ? "))

    # Création de la liste de joueurs numérotés (1, 2, 3, ..., nombre_joueurs)
    joueurs = list(range(1, nombre_joueurs + 1))

    # Mélange aléatoire des joueurs
    random.shuffle(joueurs)

    # Création des équipes vides
    equipes = {i: [] for i in range(1, nombre_equipes + 1)}

    # Répartition des joueurs dans les équipes
    for i, joueur in enumerate(joueurs):
        equipe_num = (i % nombre_equipes) + 1  # Assure une répartition équitable
        equipes[equipe_num].append(joueur)

    # Affichage des équipes et des joueurs
    print("\nRépartition des équipes :")
    for equipe, membres in equipes.items():
        print(f"Équipe {equipe}: Joueurs {', '.join(map(str, membres))}")

# Appel de la fonction
repartir_joueurs()
