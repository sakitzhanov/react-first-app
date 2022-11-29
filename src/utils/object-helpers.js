export const updateObjectInArray = (items, itemId, propName, newObjProps) => {
    return items.map(user => {
        if (user[propName] === itemId) {
            return {
                ...user,
                ...newObjProps
            }
        }

        return user;
    })
}