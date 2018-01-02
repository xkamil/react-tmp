const areEqual = (obj1, obj2) => {
        let equal = true;

        Object.getOwnPropertyNames(obj1).forEach((key) => {
            if (obj1[key] !== obj2[key]) {
                equal = false;
            }
        });

        return equal;
};

export default {areEqual}