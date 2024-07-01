export const Loader = () => {
    return <div style={{
        minHeight : '25px',
        height: '80%',
        aspectRatio: '1',
        border: '4px solid #f3f3f3', /* Light gray border */
        borderTop: '4px solid #3498db', /* Blue color for spinning part */
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    }}></div>
}