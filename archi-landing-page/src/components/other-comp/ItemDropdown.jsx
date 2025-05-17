

const ItemDropdown = ({href,src}) => {
  return (
    <a href={href} target='_blank' className="item-drop-anchor">
        <img src={src} alt="web de archi growth" className="img-item-drop-anchor"/>
    </a>
  )
}

export default ItemDropdown