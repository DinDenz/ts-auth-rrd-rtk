const Questions2 = () => {
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  const caras = { fly: () => console.log("I'm swimming") };

  const isFish = (pet: Fish | Bird): pet is Fish => {
    // return "swim" in pet;
    // return pet.hasOwnProperty('swim');
    return (pet as Fish).swim !== undefined;
  };

  return <div>{isFish(caras) ? "it's a fish" : "not fish"}</div>;
};

export { Questions2 };

/*


*/
