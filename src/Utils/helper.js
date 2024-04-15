export const convertTo24Hour = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Pad single digit minutes with leading zero
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  };

  export const filterUsingName = (list, searchParam) => {
    return list?.filter(user =>
      user.name.toLowerCase().includes(searchParam.toLowerCase())
    );
  };