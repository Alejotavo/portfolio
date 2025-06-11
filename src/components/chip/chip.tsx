
interface TechChipProps {
  name: string;
}


function Chip({ name }: TechChipProps) {

    const iconFile = name.toLowerCase().replace(/\s/g, '') + '.svg'; // Ej: 'ANT Design' -> 'antdesign.svg'

    return (
    <div className="d-inline-flex align-items-center border rounded-pill px-3 py-1 me-2 mb-2 bg-light shadow-sm">
        <img
            src={`/images/techLogos/${iconFile}`}
            alt={name}
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        <span className="fw-semibold text-muted">{name}</span>
    </div>
   );
  }
  
  export default Chip;