import { useState } from "react";
import { Pet } from "../Pets/Pets";

export function ArraysEx( ){


    const [colors, setColors] = useState(['red', 'orange', 'yellow'])
    const [pets, setPets] = useState<Pet[ ]>([ // <Pet[]> is a generic because that's the type, if you take this away it's no longer explicitly pet 
        {name: 'Hank', type: 'Dog', id: 1},
        {name: 'Clover', type: 'Dog', id: 2},
        {name: 'Pootie', type: 'Dog', id: 3},
        {name: 'Kochana', type: 'Dog', id: 4},
        {name: 'Piper', type: 'Dog', id: 5}

    ])
    

    function addColor(color: string){
        setColors([...colors, color])
    }

    function deletePetByIndex(index: number){
        setPets([...pets.splice(0, index), ...pets.splice(index+1)])
    }
    function deletePetById(id: number){
        setPets([...pets.filter(pet => pet.id !== id)])
    }

    return(
        <div>
        <ol>
            {
            colors.map((color, i) => <li key={i}>{color}</li>)
            }   

            <h2>Want to add a different color?</h2>

            <button onClick={()=> addColor('Green')}>Green</button>
            <button onClick={()=> addColor('Blue')}>Blue</button>
            <button onClick={()=> addColor('Violet')}>Violet</button>


            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>

                {
                    pets.map((pet, i) =>
                        <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><button onClick={()=> deletePetByIndex(i)}>Delete</button></td>

                        </tr>



                        )
                }


            </table>


        </ol>
        </div>
    )
}

