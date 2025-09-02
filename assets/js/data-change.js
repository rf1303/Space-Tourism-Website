

export const dataSpace = async (section) => {
    try {
        const result = await fetch("./data.json");
        if (!result.ok) throw new Error("Error al cargar data.json");
        const dataJson = await result.json();

        return dataJson[section];
        // handle result
    } catch (error) {
        console.error("Errror en dataSpace", error);
        return null;
    }
};
