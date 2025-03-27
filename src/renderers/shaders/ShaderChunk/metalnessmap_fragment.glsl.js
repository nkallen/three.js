export default /* glsl */`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP
  #ifdef USE_METALNESSMAP_TRIPLANAR
		vec4 texelMetalness = texture2DTriplanar( metalnessMap, metalnessMapTransform, triplanarCoords, triplanarWeights );
  #else
    #if defined( USE_METALNESSMAP_CYLINDRICAL )
      vec2 vMetalnessMapUv = ( metalnessMapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif
		vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  #endif

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;
