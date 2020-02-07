import React, { Fragment } from "react";
import "./welcome-page.css";
import SubmitButton from "../forms/submit-button/SubmitButton";
import logo from "../../assets/logo.jpeg";
import Grid from "@material-ui/core/Grid";
import bgTop from "../../assets/welcome-page/wave-top.png";
import bgMid from "../../assets/welcome-page/wave-mid.png";
import bgBot from "../../assets/welcome-page/wave-bot.png";

const WelcomePage = ({ startCourse, value }) => {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        minHeight: "calc(100vh - 80px)",
        position: "relative"
      }}
    >
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage: `url(${bgTop})`
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: `url(${bgMid})`
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage: `url(${bgBot})`
            }}
          ></div>
        </div>
      </div>
      <Grid item lg={7} md={7} sm={10} xs={12} style={{ zIndex: 1000 }}>
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#353535",
            padding: "10px 20px",
            color: "white",
            borderRadius: "5px"
          }}
          className="animated bounceInLeft delay-1s"
        >
          <i
            className="fas fa-book"
            style={{ fontSize: "20px", marginRight: "15px" }}
          ></i>
          <div style={{ fontSize: "25px", fontWeight: 700 }}>
            CARNET DE BORD
          </div>
        </div>
        <div
          style={{ fontWeight: 600, textAlign: "justify" }}
          className="animated bounceInRight delay-1s"
        >
          Bienvenue dans votre carnet de bord.
        </div>
        <br />
        <div
          style={{ textAlign: "justify" }}
          className="animated bounceInRight delay-1s"
        >
          Ce carnet est un outil qui vous est dédié, il a pour but de vous aider
          à mieux comprendre les mécanismes de votre propre fonctionnement.
        </div>
        <br />
        <div
          style={{ textAlign: "justify" }}
          className="animated bounceInRight delay-1s"
        >
          En effet, tout au long de la semaine, vous allez découvrir différentes
          notions comportementales. Dans ce carnet, vous passerez des tests en
          rapport avec ces notions. Ces tests ne sont pas des tests de
          connaissances, ils n’ont pas pour objectif de vous évaluer. Ils
          servent à vous aider à mieux vous connaître. Ainsi, n’oubliez pas
          qu’il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de
          mauvais résultats.
        </div>
        <br />
        <div
          style={{ textAlign: "justify" }}
          className="animated bounceInRight delay-1s"
        >
          Outre les tests, des espaces de saisies libres sont prévus pour que
          vous puissiez répondre librement à certaines questions.
        </div>
        <br />
        <div
          style={{ textAlign: "justify", fontWeight: 600 }}
          className="animated bounceInRight delay-1s"
        >
          Comment fonctionne ce carnet de bord ?
        </div>
        <br />
        <div
          style={{ textAlign: "justify" }}
          className="animated bounceInRight delay-1s"
        >
          Au fur et à mesure de votre progression dans le cours, vous accèderez
          à différents onglets, qui abordent chacun un aspect différent de votre
          mode de fonctionnement. Il faut avoir complété un onglet avant de
          pouvoir passer au suivant.
        </div>
        <br />
        <div
          style={{ textAlign: "justify", marginBottom: "50px" }}
          className="animated bounceInRight delay-1s"
        >
          Enfin, sachez que vos réponses ne sont pas définitives, vous pouvez
          les modifier à volonté.
        </div>
        <Grid className="animated bounceInLeft delay-1s">
          <SubmitButton onClick={() => startCourse()} type="play">
            {value === 0 ? (
              <Fragment>Démarrer</Fragment>
            ) : (
              <Fragment>Reprendre</Fragment>
            )}
          </SubmitButton>
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "45px", marginBottom: "50px" }}
            className="animated bounceInRight delay-1s"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
