import React, { useState } from 'react';

interface IProps {
    items: string[];
}

const GetItem: React.FC<IProps> = ({ items }) => {

    const [selecionado, setSelecionado] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setSelecionado(item);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li role='textbox' key={index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                        {item}
                    </li>
                ))}
            </ul>
            {selecionado && <p>Item selecionado: {selecionado}</p>}
        </div>
    );
};

export default GetItem;
