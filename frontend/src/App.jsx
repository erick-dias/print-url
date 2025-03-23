import { useState } from "react";
import { Download, Check, X } from "lucide-react";

export default function App() {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isUrlValid, setIsUrlValid] = useState(false); // Estado para validação em tempo real

  // Função para validar a URL de forma simples
  const isValidUrl = (url) => {
    return (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      (url.startsWith("www.") && url.includes("."))
    );
  };

  // Validação em tempo real
  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);

    if (newUrl) {
      const isValid = isValidUrl(newUrl);
      setIsUrlValid(isValid);
      setError(isValid ? "" : "Por favor, insira um link válido."); // Mensagem de erro em tempo real
    } else {
      setIsUrlValid(false);
      setError(""); // Limpa a mensagem de erro se o campo estiver vazio
    }
  };

  const captureScreenshot = async () => {
    if (!url) {
      setError("Por favor, insira uma URL válida.");
      return;
    }

    if (!isUrlValid) {
      setError("Por favor, insira um link válido.");
      return;
    }

    setLoading(true);
    setScreenshot(null);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/screenshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (data.screenshot) setScreenshot(data.screenshot);
    } catch (error) {
      console.error("Erro ao capturar a tela", error);
      setError("Erro ao capturar a tela. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (screenshot) {
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "screenshot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Captura de Tela de URL</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Digite a URL..."
            value={url}
            onChange={handleUrlChange}
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {url && (
            <div className="absolute right-3 top-3">
              {isUrlValid ? (
                <Check className="text-green-500" />
              ) : (
                <X className="text-red-500" />
              )}
            </div>
          )}
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Mensagem de erro */}
        <button
          onClick={captureScreenshot}
          disabled={loading || !isUrlValid}
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="loader"></div> {/* Spinner animado */}
              <span className="ml-2">Capturando...</span>
            </div>
          ) : (
            "Capturar Screenshot"
          )}
        </button>
      </div>
      {screenshot && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-black font-semibold mb-2">Resultado:</h2>
          <p>
            <button
              onClick={downloadImage}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Download className="mr-2" /> Baixar Imagem
            </button>
          </p>
          <center>
            <img
              src={screenshot}
              alt="Screenshot"
              className="border rounded-lg shadow-lg max-w-full"
            />
          </center>
        </div>
      )}
     
    </div>
  );
}
