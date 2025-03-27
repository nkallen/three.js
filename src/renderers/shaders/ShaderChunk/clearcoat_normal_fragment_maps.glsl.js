export default /* glsl */`
#ifdef USE_CLEARCOAT_NORMALMAP_TRIPLANAR

	normal = normalize(normalMatrix * transpose(mat3(texture3DMatrix)) * texture2DTriplanarNormal( clearcoatNormalMap, clearcoatNormalMapTransform, clearcoatNormalScale, normalize(mat3(texture3DMatrix) * vModelNormal.xyz), triplanarCoords, triplanarWeights ));

#elif defined( USE_CLEARCOAT_NORMALMAP )

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;
