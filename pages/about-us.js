import React from "react";
import HeadingContent from "../components/HeadingContent";

export default function AboutUs() {
  return (
    <>
      <HeadingContent title="Sobre nós">
        <p>
          Bem-vindo ao <strong>Portal Chrome</strong> – sua melhor fonte on-line
          para tutoriais, análises e notícias relacionadas a Chromebooks, Chrome
          OS, Google Chrome e tudo relaciondo a Google. Estamos empenhados em
          fornecer a você o melhor desses mundos com artigos.
        </p>

        <p>
          Nossa missão é{" "}
          <strong>Aprimorar a sua experiência de computação</strong>
        </p>

        <p>
          Esperamos que você goste do nosso site, tanto quanto gostamos de
          oferecê-lo. Se você tiver alguma dúvida ou comentário, não hesite em
          nos{" "}
          <a target="_blank" href="mailto:portalchrm@gmail.com">
            contatar
          </a>
          .
        </p>
      </HeadingContent>
    </>
  );
}
