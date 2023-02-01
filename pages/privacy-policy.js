import React from "react";
import HeadingContent from '../components/HeadingContent';

export default function PrivacyPolicy() {
    return (
      <>
        <HeadingContent  title='Política de privacidade'>
            <p>
                No <strong>portalchrome.com.br</strong>, a privacidade de nossos visitantes é de extrema importância para nós. 
                Este documento de política de privacidade descreve os tipos de informações pessoais recebidas e 
                coletadas pelo portalchrome.com.br e como elas são usadas.
            </p>

            <h2>Analytics</h2>

            <p>
                Usamos o Google Analytics para analisar o uso do nosso site. O Google Analytics coleta informações sobre o uso do 
                site por meio de cookies. As informações coletadas relacionadas ao nosso site são usadas para criar relatórios 
                sobre o uso do nosso site. A política de privacidade do Google está disponível em: 
                <a target='_blank' href="https://www.google.com/policies/privacy/">
                    https://www.google.com/policies/privacy/
                </a>
            </p>
        </HeadingContent>
      </>
    )
  }