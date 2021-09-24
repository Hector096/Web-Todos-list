export const getData = () => JSON.parse(localStorage.getItem('Tasks')) || [];

export const saveData = (data) => localStorage.setItem('Tasks', JSON.stringify(data));