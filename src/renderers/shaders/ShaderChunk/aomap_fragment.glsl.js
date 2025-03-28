export default /* glsl */`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
  #ifdef USE_AOMAP_TRIPLANAR
		float ambientOcclusion = ( texture2DTriplanar( aoMap, aoMapTransform, triplanarCoords, triplanarWeights ).r - 1.0 ) * aoMapIntensity + 1.0;
  #else
    #if defined( USE_AOMAP_CYLINDRICAL )
      vec2 vAoMapUv = ( aoMapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif
		float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
  #endif

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;
