const formatFechaHora = (fecha) => {
    return new Date(fecha).toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  };

  export default formatFechaHora;