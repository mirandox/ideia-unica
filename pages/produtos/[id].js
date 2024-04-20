export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos (props) {

    return (
        <div>
            <h1>Produto: {props.id}</h1>
        </div>
    )
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}