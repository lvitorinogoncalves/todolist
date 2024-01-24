import React from 'react';
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h2>Sobre a Aplicação de Lista de Atividades</h2>
      <p>
        Bem-vindo à nossa aplicação de Lista de Atividades! Aqui, você pode
        organizar suas tarefas diárias de maneira eficiente e sem complicações.
        Estamos comprometidos em tornar sua vida mais fácil, ajudando-o a manter
        o controle de suas responsabilidades, metas e projetos.
      </p>
      <h3>Recursos Principais</h3>
      <ul>
        <li>
          <strong>Adicionar Tarefas:</strong> Crie novas tarefas inserindo
          detalhes importantes para mantê-lo no caminho certo.
        </li>
        <li>
          <strong>Editar e Atualizar:</strong> Ajuste suas tarefas a qualquer
          momento para refletir as mudanças necessárias.
        </li>
        <li>
          <strong>Marcar como Concluído:</strong> Ao completar uma tarefa,
          marque-a como concluída para acompanhar seu progresso.
        </li>
        <li>
          <strong>Excluir Tarefas:</strong> Remova tarefas concluídas ou
          irrelevantes.
        </li>
        <li>
          <strong>Filtrar e Organizar:</strong> Utilize recursos de filtragem
          para organizar suas tarefas por data, prioridade ou critério
          relevante.
        </li>
      </ul>
      <h3>Dicas para uma Melhor Experiência</h3>
      <ul>
        <li>
          Utilize as funcionalidades de edição e exclusão para manter sua lista
          limpa e organizada.
        </li>
        <li>
          Aproveite as opções de filtragem para focar nas tarefas mais
          importantes.
        </li>
        <li>Marque suas tarefas concluídas para um senso de realização.</li>
        <li>
          Mantenha sua lista atualizada para uma visão clara de suas
          responsabilidades.
        </li>
      </ul>
      <p>
        Estamos empolgados por ter você a bordo e esperamos que nossa aplicação
        torne seu dia a dia mais produtivo e tranquilo. Se precisar de ajuda ou
        tiver sugestões, nossa equipe está à disposição para tornar esta
        experiência ainda melhor. Boa organização!
      </p>
    </div>
  );
}

export default About;
