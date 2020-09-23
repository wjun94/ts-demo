import * as React from 'react'
import { useState } from 'react'
import * as ReactDom from 'react-dom'

// const a = <h1>111</h1>

function Example() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
          </button>
        </div>
    );
}

ReactDom.render(<Example />, document.querySelector('.root'))