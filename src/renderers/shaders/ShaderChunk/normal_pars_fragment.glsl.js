export default /* glsl */`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#if defined( USE_TANGENT )

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;
