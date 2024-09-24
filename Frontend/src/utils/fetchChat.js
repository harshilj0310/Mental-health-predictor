export const fetchChat = async (prompt) => {
  const excelUrl = `http://localhost:5000/api/rag-bot`;
  try {
    let response = await fetch(excelUrl, {
      // mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    response = await response.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
};

export const getSentiment = async (prompt) => {
  const url = "http://localhost:5000/api/sentiment";
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    response = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
};
