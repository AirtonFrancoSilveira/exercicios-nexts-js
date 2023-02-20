function generateList() {
    const list = [];
  
    for (let i = 0; i <= 10; i++) {
      list.push(<span>{i},</span>);
    }
  
    return list;
  }

export default function listav2() {
    return (
        <div>
            <h1>
                {generateList()}
            </h1>
        </div>
    )
}