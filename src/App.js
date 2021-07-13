import React, {Component} from 'react';
import Tabla from './Tabla';
import Form from './Form';

class App extends Component {
    state = {
        personas: [

            {
                nombre: 'Clark',
                apellido: 'Kent',
            },

            {
                nombre: 'Bruce',
                apellido: 'Wayne',
            },
            {
                nombre: 'Peter',
                apellido: 'Parker',
            },
            {
                nombre: 'Selina',
                apellido: 'Kyle',
            },
        ]
    }
    enviarFormulario = (persona) => {
        this.setState({ personas: [...this.state.personas, persona] });

    }


    eliminarPersona = (indice) => {
        const {personas} = this.state

        this.setState({
            personas: personas.filter((personas, i) => {
                return i !== indice;
            }),
        });
    }

    render() {
        const {personas} = this.state;
        return (
            <div className="App">
                <h1>Tutorial de React</h1>
                <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona}/>
                <Form enviarFormulario={this.enviarFormulario} />
            </div>
        );
    }
}

export default App;

