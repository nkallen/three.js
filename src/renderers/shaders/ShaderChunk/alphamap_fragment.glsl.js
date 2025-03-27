export default /* glsl */`
#ifdef USE_ALPHAMAP
	#ifdef USE_ALPHAMAP_TRIPLANAR

		diffuseColor.a *= texture2DTriplanar( alphaMap, alphaMapTransform, triplanarCoords, triplanarWeights ).g;

	#else
    #if defined( USE_ALPHAMAP_CYLINDRICAL )
      vec2 vAlphaMapUv = ( alphaMapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif

		diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

	#endif
#endif
`;
