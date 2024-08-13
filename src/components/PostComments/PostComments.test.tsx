import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComment />);

        const firstCommentText = 'Primeiro Comentário';
        const secondCommentText = 'Segundo Comentário';

        // Seleciona a textarea e o botão pelo atributo data-testid
        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('submit-button');

        // Simula a inserção do primeiro comentário
        fireEvent.change(textarea, { target: { value: firstCommentText } });
        fireEvent.click(button);

        // Simula a inserção do segundo comentário
        fireEvent.change(textarea, { target: { value: secondCommentText } });
        fireEvent.click(button);

        // Verifica se os dois comentários foram adicionados
        expect(screen.getByText(firstCommentText)).toBeInTheDocument();
        expect(screen.getByText(secondCommentText)).toBeInTheDocument();
    });
});