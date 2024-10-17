const Question3 = () => {
  const myObj = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Main St",
      zip: "10001",
      country: "USA",
      house: {
        color: "red",
        rooms: 3,
        size: "large",
      },
    },
  };

  /*   const copyWithObjectAssign = Object.assign({}, myObj);

  const copyWithSpreadOperator = { ...myObj };

  const deepCopyWithJSON = JSON.parse(JSON.stringify(myObj)); */

  // ниже два решения с рекурсией - с hasOwnPopperty и более императивное

  const deepCopyRecursiveFunction = (obj: Record<string, any> | null) => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    } // по факту это нужно для js так как в ts мы типизируем пропсы функции и нам эта проверка уже не нужна. но я оставлю ее просто

    const copyObj: Record<string, any> = {};

    for (let key in obj) {
      if (typeof obj[key] === "object") {
        copyObj[key] = deepCopyRecursiveFunction(obj[key]);
      } else {
        copyObj[key] = obj[key];
      }
    }

    return copyObj;
  };

  /*  function deepCopy(obj: Record<string, any>) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    const copy: Record<string, any> = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // есть более современный метод Object.hasOwn(object1, 'prop')!
        copy[key] = deepCopy(obj[key]);
      }
    }

    return copy;
  } */

  // * Это решение на чистом js является более универсальным
  /*function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const deepCopiedObject = deepCopy(originalObject); */

  const copyWithRecursiveFunction = deepCopyRecursiveFunction(myObj);

  console.log("deep copy with recursion", copyWithRecursiveFunction);

  /*   console.log("shallow copy with object assign", copyWithObjectAssign);

  console.log("shallow copy with spead", copyWithSpreadOperator);

  console.log("deep copy with json", deepCopyWithJSON);
 */
  return (
    <div>
      <p>info aout copy methods</p>
    </div>
  );
};

export { Question3 };
