export default /* glsl */`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#if defined( USE_TRIPLANAR )

uniform float triplanarHardness;

#endif
#if defined( USE_TRIPLANAR ) || defined( USE_CYLINDRICAL )

	varying vec3 vModelPosition;

#endif
#if defined( USE_TRIPLANAR ) || defined( USE_CYLINDRICAL ) || (defined(USE_ANISOTROPY) && !defined(USE_UV1) && !defined(USE_UV2) && !defined(USE_UV3))

	varying vec3 vModelNormal;
  uniform mat4 texture3DMatrix;
  uniform mat4 invTexture3DMatrix;

#endif
#if defined( USE_MAP_CYLINDRICAL ) || defined( USE_MAP_TRIPLANAR )

	uniform mat3 mapTransform;

#elif defined( USE_MAP_UV )

	varying vec2 vMapUv;

#endif
#if defined( USE_ALPHAMAP_CYLINDRICAL ) || defined( USE_ALPHAMAP_TRIPLANAR )

	uniform mat3 alphaMapTransform;

#elif defined( USE_ALPHAMAP_UV )

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#if defined( USE_AOMAP_CYLINDRICAL ) || defined( USE_AOMAP_TRIPLANAR )

	uniform mat3 aoMapTransform;

#elif defined( USE_AOMAP_UV )

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#if defined( USE_NORMALMAP_CYLINDRICAL ) || defined( USE_NORMALMAP_TRIPLANAR )

	uniform mat3 normalMapTransform;

#elif defined( USE_NORMALMAP_UV )

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#if defined( USE_METALNESSMAP_CYLINDRICAL ) || defined( USE_METALNESSMAP_TRIPLANAR )

	uniform mat3 metalnessMapTransform;

#elif defined( USE_METALNESSMAP_UV )

	varying vec2 vMetalnessMapUv;

#endif
#if defined( USE_ROUGHNESSMAP_CYLINDRICAL ) || defined( USE_ROUGHNESSMAP_TRIPLANAR )

	uniform mat3 roughnessMapTransform;

#elif defined( USE_ROUGHNESSMAP_UV )

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#if defined( USE_CLEARCOAT_NORMALMAP_CYLINDRICAL ) || defined( USE_CLEARCOAT_NORMALMAP_TRIPLANAR )

	uniform mat3 clearcoatNormalMapTransform;

#elif defined( USE_CLEARCOAT_NORMALMAP_UV )

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;
