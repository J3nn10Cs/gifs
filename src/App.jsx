
import { useState } from "react"
import { Card } from "./components/card";
import Search from "./components/Search";

function App() {
  //va a ser un arreglo 
  const [categories,setCategories] = useState([]);

  const onNewValue = (event) => {
    //para saber si inclute
    if(categories.includes(event)) return
    setCategories([event])
  }

  return (
    <>
      <header className="p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">GifExpertApp</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* buscador */}
        <section className="my-4">
          <Search
            onNewValue={onNewValue}
          />
        </section>
        
          {
            categories.map(cat => (
              <div
                className=""
                key={cat}
              >
                <Card
                  category={cat}
                />
              </div>
            ))
          }
      </main>
      
    </>
  )
}

export default App
