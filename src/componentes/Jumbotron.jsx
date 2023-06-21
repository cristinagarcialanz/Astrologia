import React, { Component } from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';
import '../estilos/jumbotron.css'


export default class ContenedorJumbotron extends Component {

  render() {
    return (

      <>
        <Jumbotron>
          <Display4>UN UNIVERSO INFINITO</Display4>
          <Lead>Astrologia Evolutiva</Lead>
          <hr className="my-4" />
          <p>“Te advierto, quien quiera que fueres, Oh! Tú que deseas sondear los arcanos de la
            Naturaleza, que si no hallas dentro de ti mismo, aquello que buscas, tampoco podrás hallarlo fuera.
            Si ignoras las excelencias de tu propia casa, ¿Cómo pretendes encontrar otras excelencias?.
            En ti se halla oculto el tesoro de los tesoros. Oh! Hombre,
            conócete a ti mismo y conocerás al Universo y a los Dioses.”
            Frase inscrita en el antiguo Templo de Delfos.</p>
          <Button warning lg ><a href="https://www.youtube.com/channel/UCjPrfmJ9QUdmoaHI7foPMQQ" target="_blank" rel="noreferrer">Learn more</a></Button>
        </Jumbotron>

      </>
    )
  }
}
