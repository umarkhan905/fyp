const clearInterviewStorage = () => {
  localStorage.removeItem("interview");
  localStorage.removeItem("participant");
  localStorage.removeItem("user");
};

export { clearInterviewStorage };
