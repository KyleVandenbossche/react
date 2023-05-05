import { useState } from "react";

interface Pet {
    name: string;
    breed: string;
}

export function PetInfo(){

    const [pet, setPet] = useState<Pet>({ name: "Hank", breed: "Golden Retreiver" });


    return (

        <p>Name: {pet.name} is a {pet.breed}</p>
    );
  };



export default PetInfo;