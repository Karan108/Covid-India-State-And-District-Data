export const sort = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.data > b.data ? -1 : 1));
} 