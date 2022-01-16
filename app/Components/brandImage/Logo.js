import React from 'react'
import Image from 'react-native-remote-svg'

export default function Logo() {
	return (
		<Image
			source={require("../../assets/logo.svg")}
		/>
	)
}
