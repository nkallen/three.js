export default /* glsl */`
#ifdef USE_TRIPLANAR

	vec3 triplanarWeights = pow(abs(mat3(texture3DMatrix) * vModelNormal), vec3(triplanarHardness, triplanarHardness, triplanarHardness));
	triplanarWeights /= dot(triplanarWeights, vec3(1.0, 1.0, 1.0));
	vec3 triplanarCoords = vModelPosition.xyz;

#endif

#ifdef USE_CYLINDRICAL

  // Cylindrical and toroidal parameterizations without vertex seams
  // DOI:10.1080/2151237X.2012.654054
	float positionBasedU1 = fract(atan(vModelPosition.z, vModelPosition.x) * RECIPROCAL_PI2);
	float positionBasedU2 = fract(positionBasedU1 + 0.5) - 0.5;
  vec2 positionBasedUv = vec2(fwidth(positionBasedU1) < fwidth(positionBasedU2) - 1e-3 ? positionBasedU1 : positionBasedU2, vModelPosition.y);

#endif

`;
