export default /* glsl */`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#if defined( USE_TANGENT )

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

  #elif defined( USE_NORMALMAP_UV )

	  mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );

  #elif defined( USE_NORMALMAP_CYLINDRICAL ) || defined( USE_CLEARCOAT_NORMALMAP_CYLINDRICAL ) || (defined( USE_ANISOTROPY ) && !defined( USE_UV1 ) || !defined( USE_UV2 ) && !defined( USE_UV3 ))
  
    #if defined( USE_NORMALMAP_CYLINDRICAL )
      vec2 vNormalMapUv = ( normalMapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif

    #if defined( USE_CLEARCOAT_NORMALMAP_CYLINDRICAL )
      vec2 vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( positionBasedUv, 1 ) ).xy;
    #endif

    vec3 tangent = normalize(cross(normal, mat3(modelViewMatrix) * transpose(mat3(texture3DMatrix)) * vec3(0, 1, 0)));
    vec3 bitangent = cross(tangent, normal);
  	mat3 tbn = mat3(tangent, bitangent, normal);
  
	#elif defined( USE_CLEARCOAT_NORMALMAP_UV )

	  mat3 tbn = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#else

	  mat3 tbn = getTangentFrame( - vViewPosition, normal, vUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

  #elif defined( USE_CLEARCOAT_NORMALMAP_CYLINDRICAL )

    vec3 tangent2 = normalize(cross(normal, mat3(modelViewMatrix) * transpose(mat3(texture3DMatrix)) * vec3(0, 1, 0)));
    vec3 bitangent2 = cross(tangent2, normal);
  	mat3 tbn2 = mat3(tangent2, bitangent2, normal);

	#elif defined( USE_CLEARCOAT_NORMALMAP_UV )

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;
