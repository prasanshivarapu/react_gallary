// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {wanted, realimage, pick} = props
  const {imageUrl, id} = wanted
  const btn = () => {
    realimage(id)
  }
  const pick1 = pick ? 'btnbtn' : ''
  return (
    <div className="greet1">
      <button type="button" className={`buttondisplay ${pick1}`} onClick={btn}>
        <img className={`image ${pick1}`} src={imageUrl} alt="avatar" />
      </button>
    </div>
  )
}

export default ThumbnailItem
