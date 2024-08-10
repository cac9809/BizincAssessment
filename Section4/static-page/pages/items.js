import fs from 'fs';
import path from 'path';

export default function Items({ items }) {
    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'items.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(jsonData);

    return {
        props: {
            items
        }
    };
}