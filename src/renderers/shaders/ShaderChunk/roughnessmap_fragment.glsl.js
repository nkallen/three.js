export default /* glsl */`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP_TRIPLANAR

	vec4 texelRoughness = texture2DTriplanar( roughnessMap, roughnessMapTransform, triplanarCoords, triplanarWeights );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#elif defined( USE_ROUGHNESSMAP )

  #if defined( USE_ROUGHNESSMAP_CYLINDRICAL )
    vec2 vRoughnessMapUv = ( roughnessMapTransform * vec3( positionBasedUv, 1 ) ).xy;
  #endif

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;
