export const Loader = () => {
    return <div style={{
        width: '20px',
        height: '20px',
        border: '4px solid #f3f3f3', /* Light gray border */
        borderTop: '4px solid #3498db', /* Blue color for spinning part */
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    }}></div>
}