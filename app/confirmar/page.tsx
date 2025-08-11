export default function Confirmar({ searchParams }: { searchParams: { name?: string; type?: string } }) {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Áudio recebido ✅</h1>
        <p className="subtitle">Nome: <b>{searchParams.name || "—"}</b> | Tipo: <b>{searchParams.type || "—"}</b></p>
        <p>Perfeito! O app já está preparado para receber áudios via <i>Compartilhar</i> do WhatsApp (Android). No próximo passo, vamos transcrever e transformar em tarefa/evento.</p>
        <a className="cta" href="/">Voltar para a Home</a>
        <p className="note">Dica: instale o app no celular (Adicionar à tela inicial) para que ele apareça na folha de compartilhamento.</p>
      </div>
    </div>
  );
}
