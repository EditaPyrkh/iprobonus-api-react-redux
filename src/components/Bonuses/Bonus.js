import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBonus } from '../../store/actions'
import burn_icon from '../images/burn_icon.png'
import Loader from '../Loader/Loader'
import arrowButton from '../images/arrowButton.png'

function Bonus() {
  const token = useSelector((state) => state.accessToken)
  const loading = useSelector((state) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    token && dispatch(getBonus(token))
  }, [dispatch, token])

  const bonus = useSelector((state) => state.bonus)

  if (!bonus || loading) {
    return <Loader />
  }

  const dateStr = bonus.dateBurning
  const [month, day] = dateStr.split(/[-T:]/)
  const formattedDate = `${day}.${month}`
  return (
    <div className="popUpWindow">
      <div className="textOfPopUp">
        <h3>300 бонусов</h3>
        <div className="miniContainer">
          <h4>{formattedDate} сгорит </h4>
          <div className="fireEmoji">
            <img src={burn_icon} alt="fireEmoji" />
          </div>
          <h5> {bonus.forBurningQuantity} бонусов</h5>
        </div>
      </div>
      <div className="arrowButtonContainer">
        <button>
          <img
            className="imgArrowBtn"
            src={arrowButton}
            alt="arrowButton"
          ></img>
        </button>
      </div>
    </div>
  )
}

export default Bonus
