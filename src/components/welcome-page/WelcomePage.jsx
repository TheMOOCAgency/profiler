import React, { Fragment } from "react";
import SubmitButton from "../forms/submit-button/SubmitButton";
import logo from "../../assets/logo.jpeg";
import Grid from "@material-ui/core/Grid";

const WelcomePage = ({ startCourse }) => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        padding: "20px"
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ height: "100px", marginBottom: "50px" }}
      />
      <Grid item lg={7} md={12} sm={12} xs={12}>
        <div style={{ textAlign: "justify" }}>
          {" "}
          Bienvenue dans votre carnet de bord.
        </div>{" "}
        <br />
        <div style={{ textAlign: "justify" }}>
          Ce carnet est un outil qui vous est dédié, il a pour but de vous aider
          à mieux comprendre les mécanismes de votre propre fonctionnement.
        </div>
        <br />
        <div style={{ textAlign: "justify" }}>
          En effet, tout au long de la semaine, vous allez découvrir différentes
          notions comportementales. Dans ce carnet, vous passerez des tests en
          rapport avec ces notions. Ces tests ne sont pas des tests de
          connaissances, ils n’ont pas pour objectif de vous évaluer. Ils
          servent à vous aider à mieux vous connaître. Ainsi, n’oubliez pas
          qu’il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de
          mauvais résultats.
        </div>
        <br />
        <div style={{ textAlign: "justify" }}>
          Outre les tests, des espaces de saisies libres sont prévus pour que
          vous puissiez répondre librement à certaines questions.
        </div>
        <br />
        <div style={{ textAlign: "justify" }}>
          Comment fonctionne ce carnet de bord ?
        </div>{" "}
        <br />
        <div style={{ textAlign: "justify" }}>
          Au fur et à mesure de votre progression dans le cours, vous accèderez
          à différents onglets, qui abordent chacun un aspect différent de votre
          mode de fonctionnement. Il faut avoir complété un onglet avant de
          pouvoir passer au suivant.
        </div>
        <br />
        <div style={{ textAlign: "justify", marginBottom: "50px" }}>
          Enfin, sachez que vos réponses ne sont pas définitives, vous pouvez
          les modifier à volonté.
        </div>
        <SubmitButton onClick={() => startCourse()}>
          <Fragment>Démarrer</Fragment>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
