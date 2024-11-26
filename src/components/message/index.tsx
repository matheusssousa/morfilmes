import { useState } from 'react';
import './style.css';

export default function Message() {
    const [showMessage, setShowMessage] = useState(localStorage.getItem('showMessage') === 'true' ? true : false);

    return (
        showMessage && <div className='overlay flex items-center justify-center'>
            <div className='w-[90%] md:w-1/4 rounded-xl bg-preto-200 flex flex-col items-center h-1/2 md:h-[40%] p-4 justify-between'>
                <p className='text-xl uppercase text-red-700 font-semibold'>Aviso</p>
                <p className='text-xs font-light text-gray-400 text-justify'>Este site tem um intuito apenas acadêmico, ou seja, voltado para aprendizado. 
                    É uma plataforma que consome APIs para assistir filmes, desenvolvida exclusivamente para fins educacionais. 
                    O desenvolvedor deste site não possui qualquer relacionamento, 
                    parceria ou vínculo com a API que disponibiliza os filmes para assistir, nem se responsabiliza pelo conteúdo fornecido pela mesma.</p>
                <div className='w-full flex flex-col gap-1 text-xs'>
                    <button type='button' onClick={() => {
                        setShowMessage(false);
                        localStorage.setItem('showMessage', 'false');
                    }}
                    className='border-2 border-gray-500 bg-white rounded-lg font-semibold py-1 text-gray-500 hover:drop-shadow-md duration-200 ease-in-out hover:scale-[1.03] focus:scale-95'>
                        Fechar e não mostrar essa mensagem novamente.
                    </button>
                    <button type='button' onClick={() => setShowMessage(false)} className='border-2 border-red-700 bg-red-400 rounded-lg font-semibold py-1 text-red-700 hover:drop-shadow-md duration-200 ease-in-out hover:scale-[1.03] focus:scale-95'>Fechar</button>
                </div>
            </div>
        </div>
    )
}