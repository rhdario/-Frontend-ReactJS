//? ESTO ES UN COMPONENTE TIPO CLASE
/* Este basicamente tiene constructores, estados privados, etc, es decir es una clase se puede encontrar de forma sencilla pero nos quita agilidad */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 39
        }
    }
    render() {
        return (
            <div>
                <h1>
                    ¡HOLA {this.props.name}! {/* Aca estoy usando el componente que declare en el archivo app.js dentro de la etiqueta <Greeting></Greeting> */}
                </h1>
                <h2>
                    La Edad es : {this.state.age} {/* Aqui lo que estoy haciendo es declarar el state creado arriba en el componente */}
                </h2>
                <div>
                    <button onClick={this.birthday}> {/* Ponemos un evento para que se ejecute con la llamada al metodo o funcion birthday pero sin los () para que no se ejecute */} 
                    Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    /* Con esta funcion lo que hacemos es setear otro numero para la edad ya que no se puede de otra manera se hace tipo flecha para comodidad,
    para poder usar la palabra this a cada rato */
    
    birthday = () => {
        this.setState((prevState)=> ( /* prevState es una variable para llamar al valor anterior y sumarle 1 luego */
            {
                age: prevState.age + 1 /* Se hace esto porque si usara variables directamente por ejemplo "this.myAge ++;" actualizaria la edad pero no la renderizaria  */
            }
        ))
    }
}

Greeting.propTypes = {
    name: PropTypes.string, //Aca lo que estoy haciendo es definir que tipo de datos es mi componente name, es reocmendable terminar con la coma.
};

export default Greeting;
