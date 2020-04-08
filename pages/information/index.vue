<template>
  <div class="container">
    <div class="div-text">
      <p>
        Cette application est un POC (Proof Of Concept), une démonstration, de
        ce qu'il est possible de faire pour le projet Appartement Témoin pour
        l'association La Cité de l'Environnement. Il a été réalisé dans un temps
        limité dans le cadre du Campus Track 2020 organisé par Campus Academy.
      </p>

      <p>Elle contient des fonctionnalités de base :</p>
      <p>- La page d'accueil</p>
      <p>- Des activités permettant d'illustrer le fonctionnement</p>
      <p>- Une page récapitulative à la fin du module.</p>

      <p>Ce qu'elle ne contient pas:</p>
      <p>- Scanner un QRCODE</p>
      <p>- Partie administration et statistique</p>
      <p>- Tableau des scores général</p>
      <p>- Gestion de la base de donnée</p>
      <p>
        Merci de l'attention que vous avez porté pour notre proposition ! Tout
        l'équipe de l'EcoDevTeam !
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  margin-top: 54px;
  flex-direction: column;
  justify-content: center;
}
.div-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    margin: 3.5%;
    color: $color-white;
    overflow: auto;
    width: 80%;
    text-align: left;
  }
}
</style>
