export default /* glsl */`
#ifdef USE_MAP

	#ifdef USE_MAP_TRIPLANAR

		vec4 sampledDiffuseColor = texture2DTriplanar( map, mapTransform, triplanarCoords, triplanarWeights );

	#else
    #if defined( USE_MAP_CYLINDRICAL )
      vec2 vMapUv = ( mapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif

		vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#endif

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;
