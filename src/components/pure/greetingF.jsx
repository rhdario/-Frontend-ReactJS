//? ESTO ES UN COMPONENTE TIPO FUNCION
/* A diferencia del de clase nos da agilidad ya que cualquier funcion puede devolver un elemento HTML 
y mediante HOOKS podemos hacer referncia y uso de todo lo de clase eso hace potente a REACTJS
Hace todo sin necesidad de crear clases, ademas existen hooks para distintas situaciones.
*/

import React, { useState } from 'react'; //Aqui se declara e importa el hook userState poniendo una coma y entre llaves
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //A diferencia de los componentes tipo clase ahora para poder usar los states debemos usar "HOOKS" en este caso la "useState", se haceprimero declarandola en la linea de import
    // const [variable, metodo para utilizarlo] = useState(valor inicial)

    const [age, setage] = useState(29);

    const birthday = () => { //Este metodo lo que hace es actualizar el estado
        setage (age + 1)
    }

    return (
        <div>
            <h1>
                ¡HOLA {props.name} desde componente funcional! {/* Aca estoy usando el componente que declare en el archivo app.js dentro de la etiqueta <Greeting></Greeting> */}
            </h1>
            <h2>
                La Edad es : {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
